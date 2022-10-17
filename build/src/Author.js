class Author {
    constructor(_id, _firstname, _lastname, _email) {
        this._id = _id;
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._email = _email;
    }
    firstNameValidator(firstname) {
        if (firstname != '' && firstname != null) {
            return true;
        }
        else {
            console.log("Firstname can't be null or empty!");
        }
    }
    lastNameValidator(lastname) {
        if (lastname != '' && lastname != null) {
            return true;
        }
        else {
            console.log("Lastname can't be null or empty!");
        }
    }
    emailValidator(email) {
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email != '' && email != null) {
            if (email.match(regEx)) {
                return true;
            }
            else {
                console.log("E-mail isn't valid!");
            }
        }
        else {
            console.log("E-mail can't be null or empty!");
        }
    }
    set firstname(v) {
        if (this.firstNameValidator(v)) {
            this._firstname = v;
        }
    }
    set lastname(v) {
        if (this.lastNameValidator(v)) {
            this._lastname = v;
        }
    }
    set email(v) {
        if (this.emailValidator(v)) {
            this._email = v;
        }
    }
    logInfo() {
        console.log(`${this._firstname} ${this._lastname} with email: ${this._email} and ID:${this._id}`);
    }
}
let a1 = new Author(1, "Jan", "Testowy", "test@test.com");
a1.logInfo();
a1.email = 'TEST@test.pl';
a1.logInfo();
a1.email = 't';
