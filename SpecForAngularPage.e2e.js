beforeEach(async function () {

    await browser.get('http://angular.io/docs');
});

describe('angular docs page', function () {
    it('should verify if feedback is displayed', async function () {
        expect(await element(by.css('h1.no-toc')).getText()).toEqual('What is Angular?');
        expect(await element(by.id('feedback')).getText()).toEqual('Feedback');

    });
});
xdescribe('angular docs page', function () {
    it('should search text "api" on site', async function () {

        var el = element(by.css('aio-search-box.search-container'));
        await el.click();
        await browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        await search.sendKeys('api');
        await expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div')).getText()).toEqual('Searching ...');
        await browser.sleep(3000);
        await expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted > ul.priority-pages > li')).getText()).toEqual('core package');
    });
});
describe('angular docs page', function () {
    it('should redirect to API List on https://angular.io/api', async function () {

        var el = element(by.css('aio-search-box.search-container'));
        await el.click();
        await browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        search.sendKeys('api');
        await browser.sleep(3000);
        var searchresult = element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted:nth-child(4) > ul.priority-pages > li.search-page.ng-star-inserted > a.search-result-item'));
        await searchresult.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/api');
        var pagename = element(by.css('#api-list'));
        expect(await pagename.getText()).toEqual('API List');
    });
});

describe('angular docs page', function () {
        it('should redirect to QuickStart page', async function () {

            var box = element(by.xpath('//*[@id="docs"]/aio-doc-viewer/div/div/div/a[2]'));
            await box.click();
            await browser.sleep(5000);
            var pagename = element(by.css('#quickstart'));
            expect(await pagename.getText()).toEqual('QuickStart');
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        });
});

describe('angular docs page', function () {
        it('should redirect to FEATURES & BENEFITS page', async function () {

            var menuLinkToFeatures = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Features"]'));
            await menuLinkToFeatures.click();
            await browser.sleep(5000);
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/features');
            var pagename = element(by.id('features--benefits'));
            expect(await pagename.getText()).toEqual('FEATURES & BENEFITS');
        });
});

describe('angular docs page', function () {
        it('should redirect to ANGULAR RESOURCES page', async function () {

            var menuLinkToResources = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Resources"]'));
            await menuLinkToResources.click();
            await browser.sleep(5000);
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/resources');
            var pagename = element(by.id('explore-angular-resources'));
            expect(await pagename.getText()).toEqual('EXPLORE ANGULAR RESOURCES');
        });
});

describe('angular docs page', function () {
        it('should redirect to EVENTS page', async function () {

            var menuLinkToEvents = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Events"]'));
            await menuLinkToEvents.click();
            await browser.sleep(5000);
            expect(await browser.getCurrentUrl()).toEqual('https://angular.io/events');
            var pagename = element(by.css('#events > aio-doc-viewer > div > div > header > h1#events.banner-headline.no-toc.no-anchor'));
            expect(await pagename.getText()).toEqual('EVENTS');
        });
});

xdescribe('angular docs page', function () {
    it('should redirect to Angular Blog page', async function () {

        var menuLinkToBlog = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Blog"]'));
        await menuLinkToBlog.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://blog.angular.io');
    });
});

// describe('angular docs page', function () {
//     it('should open The fundamentals of Angular item of left menu', async function () {
//
//         var menuLinkTheFundamentals = element(by.buttonText('Fundamentals'));
//         await menuLinkTheFundamentals.click();
//         await browser.sleep(5000);
//         expect(await menuLinkTheFundamentals['aria-pressed="true"']);
//         await menuLinkArchitecture = element(by.buttonText('Architecture'));
//         await menuLinkArchitecture.click();
//         await menuLinkArchitectureOverview = element(by.css('a.vertical-menu-item level-3 collapsed[title = "Basic building blocks of Angular applications."]'))
//         await menuLinkArchitectureOverview.click();
//         expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/architecture');
//     });
// });