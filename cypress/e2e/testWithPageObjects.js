import { onDatepickerPage } from "../support/page_objects/datepickedPage.js";
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage.js";
import { navigateTo } from "../support/page_objects/navigationPage.js";
import { onSmartTablePage } from "../support/page_objects/smartTablePage.js";

describe("Test with page Objects", () => {
  beforeEach("Open application", () => {
    cy.openHomePage();
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.toastrPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it.only("Should submit Inline and Basic Form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail(
      "John Smith",
      "test@test.com"
    );
    onFormLayoutsPage.submitBasicFormWithNameAndEmail(
      "test@test.com",
      "qwerty"
    );
    navigateTo.datepickerPage();
    onDatepickerPage.selectCommonDatePickerDateFromToday(1);
    onDatepickerPage.selectDatePickerWithRangeFromToday(7, 14);

    navigateTo.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName("Dmytro", "Orlov");
    onSmartTablePage.updateAgeByFirstName("Dmytro", 28);
    onSmartTablePage.deleteRowByIndex(0);
  });
});
