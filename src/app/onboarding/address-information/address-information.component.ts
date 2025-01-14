import { Component, OnInit } from '@angular/core';
import { Address } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-address-information',
	templateUrl: './address-information.component.html',
	styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent implements OnInit {
	permanentAddress: Address;
	presentAddress: Address;
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.permanentAddress = {
			country: '',
			state: '',
			zipcode: '',
			address: ''
		};
		this.presentAddress = {
			country: '',
			state: '',
			zipcode: '',
			address: ''
		};
	}

	proceed() {
		this.router.navigate(['../educational-info'], {
			relativeTo: this.activatedRoute
		});
	}
}
