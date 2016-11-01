export class Todo {

	id: string;
	title: string;

	constructor(id,title){
		this.id = id;
		this.title = title;
	}

	getId():string{
		return this.id;
	}

	setId(id){
		this.id = id;
	}

	getTitle():string{
		return this.title;
	}

	setTitle(title){
		this.title = title;
	}

	toString(){
		return "id = "+this.id+" , title = "+this.title;
	}
}
