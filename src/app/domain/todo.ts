export class Todo {

	title: string;

	constructor(title){
		this.title = title;
	}

	getTitle():string{
		return this.title;
	}

	setTitle(title){
		this.title = title;
	}

	toString(){
		return "title = "+this.title;
	}
}
