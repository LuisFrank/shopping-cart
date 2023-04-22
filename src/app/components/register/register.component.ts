import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';


const I18N_VALUES : { [key: string]: any} = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekLabel: 'sem'
  },
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'es';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
	constructor(private _i18n: I18n) {
		super();
	}

	getWeekdayLabel(weekday: number): string {
		return I18N_VALUES[this._i18n.language.toString()].weekdays[weekday - 1];
	}
	getWeekLabel(): string {
		return I18N_VALUES['es'].weekLabel;
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES['es'].months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
	readonly DELIMITER = '-';

	fromModel(value: string | null): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct | null): string | null {
		return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
	}
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? (date.day < 10 ? '0'+ date.day : date.day) + this.DELIMITER +(date.month < 10 ? '0'+ date.month : date.month) + this.DELIMITER + date.year : '';
	}
}




function passwordsMatchValidator(form:any){
  console.log("form",form)

  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({ passwordsMatch:true})
  }else{
    confirmPassword.setErrors(null)
  }

  return null
}


function symbolValidator(control:any){ //control = regusterForm.get('password')
  console.log(control.value)

  if(control.hasError('required')){
    return null;
  }
  if(control.hasError('minlength')){
    return null;
  }

  if(control.value.indexOf('@') > -1){
    return null
  }else{
    return {symbol: true}
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ I18n,
     { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
     { provide: NgbDateAdapter, useClass: CustomAdapter },
     { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }]
})
export class RegisterComponent implements OnInit {

  registerForm:any;
  model: any;
  faCalendar = faCalendarDay;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    console.log("lengua")
    
    // this.registerForm = this.builder.group({
    //   name: new FormControl('Jon Doe'),
    //   email: new FormControl('lflorentinomedrano@gmail.com'),
    //   username: new FormControl('John.d'),
    //   password: new FormControl('123456'),
    //   confirmPassword: new FormControl('123456')
    // })
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name: ['',Validators.required],
      lastname: ['',Validators.required],
      sex:  ['M',Validators.required],
      birthdateday: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      username: ['',Validators.required],
      password: ['',[Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ['',[Validators.required]]
    }, {
      Validators: passwordsMatchValidator
    })
  }

  register(){
    console.log(this.registerForm.value);

  }

}
