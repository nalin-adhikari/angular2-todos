import {Todo} from '../domain/todo';

export class Array {

	static remove = function(id){

		var idx = this.indexOf(id);

		if (idx != -1) {
		    return this.splice(idx, 1);
		}
		return false;
	}

	static removeFromArrayById(array,id): Todo []{
		var index = array.indexOf(id);
		if(index > -1){
			array.splice(index, 1);
		}
		return array;
	}
}
