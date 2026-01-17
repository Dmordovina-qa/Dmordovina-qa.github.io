describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru');  // ввели верный логин
        cy.get('#pass').type('qa_one_love1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажимаем войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })
})


   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#forgotEmailButton').click();  // нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');  // ввели почту для восстановления
        cy.get('#restoreEmailButton').click();  // нажимаем отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })


     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru');  // ввели верный логин
        cy.get('#pass').type('qa_one_love123');  // ввели неверный пароль
        cy.get('#loginButton').click();  // нажимаем войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })

    

     it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#mail').type('german@dolnikovu.ru');  // ввели неверный логин
        cy.get('#pass').type('qa_one_love1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажимаем войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })

    it('Проверка валидации (@ в логине)', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#mail').type('germandolnikov.ru');  // ввели логин без @
        cy.get('#pass').type('qa_one_love1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажимаем войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })

     it('Проверка на приведение к строчным буквам в логине)', function () {
        cy.visit('https://login.qa.studio/');   // зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru');  // ввели логин строчными буквами
        cy.get('#pass').type('qa_one_love1');  // ввели верный пароль
        cy.get('#loginButton').click();  // нажимаем войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю, что получили нужный текст
        cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        
    })

describe('Проверка покупки нового аватара', function () {                 
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');  // переходим на сайт https://pokemonbattle.ru/

         cy.get('input[id="k_email"]').type('USER_LOGIN');  // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');  // вводим пароль
         cy.get('button[type="submit"]').click();  // нажимаем кнопку Подтвердить

         cy.wait(2000);
         cy.get('.header_card_trainer').click(); // нажимаем в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();  // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();  // кликаем Купить у первого доступного аватара

         cy.get('.card_number').type('4111111111111111');  // вводим номер карты
         cy.get('.card_csv').type('125');  // вводим CVV карты
         cy.get('.card_date').type('1026');  // вводим срок действия карты
         cy.get('.card_name').type('german dolnikov');  // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');  // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');  // проверяем наличие и видимость сообщения об успешной покупке
     });
 });
