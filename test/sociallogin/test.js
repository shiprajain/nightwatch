/**
 * Created by Nyaconcept on 12/18/2015.
 */


module.exports = {

    'Social Login With Facebook': function (client) {
        try {
            //client.url('http://www.facebook.com');
            //client.waitForElementVisible('input[type=submit]', 5000);
            //console.log("Facebook Login Page loading...");
            //client.setValue('#email', "testlogin97@gmail.com");
            //client.setValue('#pass', "Test@login123");
            //client.click('#loginbutton');
            //client.expect.element('#u_0_2').to.be.present;
            //client.sendKeys('#u_0_2', client.Keys.CONTROL+ "t");
            client.url('http://shipra.login4website.com/prodphpsdk/');
            client.waitForElementVisible('iframe', 50000);
            client.pause(5000);
            client.frame(0);
            client.waitForElementVisible('.lr_providericons.lr_facebook', 7000);
            client.click('.lr_providericons.lr_facebook');
            client.setCookie({
                name: "token_cookie",
                value: token$requestToken,
            });
            client.getCookie(name, function callback (result){
                var token = result.value;
            });
            client.frame(null);
            client.end;

        }
        catch (err) {
            console.log(err);
        }
    }
};









        //client.setValue('input[type=text]', ['nightwatch', client.keys.ENTER]);
        //client.pause(5000);
        //client.assert.containsText('#main', 'Night Watch');


            //.waitForElementVisible('body', 10000)
            /*.setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 10000)
            .click('button[name=btnG]')
            .pause(10000)
            .assert.containsText('#main', 'Night Watch')*/
