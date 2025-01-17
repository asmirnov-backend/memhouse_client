import { Fragment, useEffect } from 'react';

import { withErrorHandler } from '@/app/error-handling';
import { Pages } from '@/pages';
import { getYMVersion } from '@/shared/hooks/useYMVersion';

import { Layout } from './layout';
import { withProviders } from './providers';
import { ServiceWorker } from './service-worker';

const usePollYMetricInitialTracking = (ymId: number) => {
  useEffect(() => {
    const pollingInterval = 100; // Интервал для частого поллинга (100 мс)
    const maxPollingTime = 2000; // Максимальное время для поллинга (2 секунды)
    let version: number | null = null;

    const findVersion = () => {
      version = getYMVersion();
      if (version !== null) {
        console.log(`[YMetric] Версия найдена`);
        console.log(`version: ${version}`);
        return true;
      }
      return false;
    };

    const startHighFrequencyPolling = () => {
      console.log('[YMetric] Начинаем частый поллинг...');
      const startTime = Date.now();

      const interval = setInterval(() => {
        if (findVersion() || Date.now() - startTime >= maxPollingTime) {
          console.log(
            version !== null
              ? `[YMetric] Поллинг завершён: версия найдена (${version}).`
              : '[YMetric] Поллинг завершён: время поллинга истекло, версия не найдена.',
          );
          clearInterval(interval);
        }
      }, pollingInterval);
    };

    const scheduleEventAfterDelay = () => {
      console.log('[YMetric] Запланирована отправка события через 3 секунды...');
      return setTimeout(() => {
        if (version !== null) {
          ym(ymId, 'params', { version });
          console.log(`[YMetric] Событие успешно отправлено с версией: ${version}.`);
        } else {
          console.log('[YMetric] Версия не найдена, событие не отправлено.');
        }
      }, 3000);
    };

    // Начинаем частый поллинг и планируем отправку события
    startHighFrequencyPolling();
    const timeout = scheduleEventAfterDelay();

    return () => {
      console.log('[YMetric] Очищаем таймеры и завершённые процессы...');
      clearTimeout(timeout); // Удаляем таймер для отправки события
    };
  }, [ymId]); // Зависимость `ymId` для обновления при изменении
};

function App() {
  usePollYMetricInitialTracking(98456879);

  return (
    <Fragment>
      <Layout>
        <Pages />
      </Layout>
      <ServiceWorker />
    </Fragment>
  );
}

export default withErrorHandler(withProviders(App));
