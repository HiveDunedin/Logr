const Application = require('spectron').Application;
const path = require('path');

const electronPath = path.join(__dirname, 'node_modules', '.bin', 'electron');

describe('Testing', () => {
    jest.setTimeout(20000);

    const app = new Application({
        path: electronPath,
        args: [path.join(__dirname)]
    });

    beforeEach(() => {
        return app.start();
    });

    afterEach(() => {
        return app.stop();
    });

    test('Creates a BrowserWindow', () => {
        expect(app.browserWindow !== null);
    });
});
