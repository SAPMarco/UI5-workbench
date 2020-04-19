sap.ui.define(["com/mrb/workbench/controller/BaseController"], function (
  BaseController
) {
  "use strict";

  return BaseController.extend("com.mrb.workbench.controller.MainContent", {
    onInit: function () {
      this._codeEditor = this.byId("aCodeEditor");
      this._ceTitle = this.byId("ceTitle");
      //manual initialization - TODO: replace by json binding
      this._codeEditor.setType("abap");
      this._updateCeTitle("ABAP");
    },

    onListItemPress: function (oEvt) {
      // TODO: dynamic bind -> CE Type, Theme or ReadSavedItems
      var boundItemValues = oEvt
        .getParameters()
        .listItem.getBindingContext()
        .getProperty();
      this._codeEditor.setType(boundItemValues.value);
      this._updateCeTitle(boundItemValues.name);
    },
    onMenuItemPress: function(oEvt){
      // TODO: dynamic bind for list
    },
    _updateCeTitle: function(sName){
      this._ceTitle.setText(sName);
    }
  });
});
