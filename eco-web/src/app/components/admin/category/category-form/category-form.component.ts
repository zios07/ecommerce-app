import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../../domain/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

	category: Category = new Category();

	constructor(private categoryService: CategoryService,
		private router: Router,
		private toastr: ToastrService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.loadCategoryToEdit();
	}

	saveCategory() {
		this.categoryService.saveCategory(this.category).subscribe(result => {
			this.toastr.success('Category created');
			this.router.navigate(['/admin/categories']);
		}, error => {
			this.toastr.error(String(error));
		})
	}

	loadCategoryToEdit() {
		let id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.categoryService.getCategory(id).subscribe((result: Category) => {
				this.category = result;
			}, error => {
				this.toastr.error(String(error));
			});
		}
	}


}
