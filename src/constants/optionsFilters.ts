import {
  FiltersNameEnum,
  FiltersTextEnum,
  FiltersRegionValueEnum,
  FiltersLandlockedLabelEnum,
  FiltersRegionLabelEnum,
  FiltersTrafficLabelEnum,
  FiltersUnLabelEnum,
  FiltersBooleanValueEnum,
  FiltersTrafficValueEnum
} from './filtersEnums';

export const optionsFilters = [
  {
    filtersName: FiltersNameEnum.region,
    text: FiltersTextEnum.Region,
    elements: [
      {
        label: FiltersRegionLabelEnum.ShowAll,
        value: FiltersRegionValueEnum.all
      },
      {
        label: FiltersRegionLabelEnum.Africa,
        value: FiltersRegionValueEnum.Africa
      },
      {
        label: FiltersRegionLabelEnum.Americas,
        value: FiltersRegionValueEnum.Americas
      },
      {
        label: FiltersRegionLabelEnum.Asia,
        value: FiltersRegionValueEnum.Asia
      },
      {
        label: FiltersRegionLabelEnum.Europe,
        value: FiltersRegionValueEnum.Europe
      },
      {
        label: FiltersRegionLabelEnum.Oceania,
        value: FiltersRegionValueEnum.Oceania
      }
    ]
  },
  {
    filtersName: FiltersNameEnum.carSide,
    text: FiltersTextEnum.Traffic,
    elements: [
      {
        label: FiltersTrafficLabelEnum.ShowAll,
        value: FiltersTrafficValueEnum.all
      },
      {
        label: FiltersTrafficLabelEnum.LeftSide,
        value: FiltersTrafficValueEnum.left
      },
      {
        label: FiltersTrafficLabelEnum.RightSide,
        value: FiltersTrafficValueEnum.right
      }
    ]
  },
  {
    filtersName: FiltersNameEnum.landlocked,
    text: FiltersTextEnum.Landlocked,
    elements: [
      {
        label: FiltersLandlockedLabelEnum.ShowAll,
        value: FiltersBooleanValueEnum.all
      },
      {
        label: FiltersLandlockedLabelEnum.Landlocked,
        value: FiltersBooleanValueEnum.true
      },
      {
        label: FiltersLandlockedLabelEnum.NonLandlocked,
        value: FiltersBooleanValueEnum.false
      }
    ]
  },
  {
    filtersName: FiltersNameEnum.unMember,
    text: FiltersTextEnum.UnMemberStates,
    elements: [
      {
        label: FiltersUnLabelEnum.ShowAll,
        value: FiltersBooleanValueEnum.all
      },
      {
        label: FiltersUnLabelEnum.onlyMembers,
        value: FiltersBooleanValueEnum.true
      },
      {
        label: FiltersUnLabelEnum.onlyNonMembers,
        value: FiltersBooleanValueEnum.false
      }
    ]
  }
];
