import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class NameGeneratorService {
	private namesFirst = [
		'Amy',
		'Anthony',
		'Bart',
		'Beatrice',
		'Cindy',
		'Casper',
		'David',
		'Dolores',
		'Erica',
		'Ernie',
		'Felicia',
		'Francis',
		'Gary',
		'Gina',
		'Harold',
		'Henrietta',
		'Irine',
		'Ivan',
		'Jill',
		'Jim',
		'Kim',
		'Kyle',
		'Larry',
		'Linda',
		'Mike',
		'Monique',
		'Nicole',
		'Notch',
		'Oliver',
		'Ophelia',
		'Patricia',
		'Peter',
		'Quarissa',
		'Quincy',
		'Rachael',
		'Rocky',
		'Samantha',
		'Simon',
		'Tomas',
		'Tricia',
		'Ulysses',
		'Ursula',
		'Victoria',
		'Vince',
		'Wally',
		'Wanda',
		'Xack',
		'Xen',
		'Yasmani',
		'Yolanda',
		'Zander',
		'Zelda'
	]

	public generateName(): string {
		const randInd = Math.round(Math.random() * (this.namesFirst.length - 1))

		return this.namesFirst[randInd]
	}
}
