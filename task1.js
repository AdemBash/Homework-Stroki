function correctname(input) {
    const validsymbols = /^[а-яА-ЯёЁa-zA-Z\s.]+$/;

    if (validsymbols.test(input)) {
        console.log("Все верно!");
        return True;
    } 
    else {
        console.log("Есть недопустимые символы");
        return False;
    }
}
const username = prompt("Введите ФИО - ");
correctname(username);