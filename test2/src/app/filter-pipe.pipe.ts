import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.campaignName.toLowerCase().includes(searchText);
    });
  }

}


@Pipe({
  name: 'brandPipe'
})
export class BrandPipePipe implements PipeTransform {

  transform(items: any[], selectedBrand: string): any[] {
    if (!items) return [];
    if (!selectedBrand) return items;
    selectedBrand = selectedBrand.toLowerCase();
    return items.filter(item => {
      return item.brand.name.toLowerCase() === selectedBrand;
    });
  }

}
