import BrowserLogger from 'alife-logger';

const logger = () => {
    try {
        return BrowserLogger.singleton(
            {
                pid: 'hv0y009r5q@6334a28707664af',
                appType: 'web',
                imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
                sendResource: true,
                enableLinkTrace: true,
                behavior: true
            }
        );
    } catch (e) {
        console.error('init error');
    }
};

export default logger;
