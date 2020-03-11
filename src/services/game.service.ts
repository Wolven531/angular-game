import { Injectable, OnInit } from '@angular/core'
import { LocStorageService } from '@services/loc-storage.service'

@Injectable({
	providedIn: 'root'
})
export class GameService implements OnInit {
	private _numSoldiers: number

	public get numSoldiers(): number {
		return this._numSoldiers
	}
	public set numSoldiers(newNum: number) {
		this._numSoldiers = newNum
	}

	constructor(private readonly locStorageService: LocStorageService) {
		this._numSoldiers = 0
	}

	public ngOnInit(): void {
		this._numSoldiers = this.locStorageService.loadNumSoldiers()
	}
}
