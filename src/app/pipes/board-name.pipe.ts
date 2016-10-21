import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "boardName"})
export class BoardNamePipe implements PipeTransform {
	transform(value: string) {
		return "/" + value;
	}
};