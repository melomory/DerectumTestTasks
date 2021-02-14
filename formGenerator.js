/**
 * Возвращате форму в виде объекта DOM
 *
 * @param {string} jsonStr json-строка
 * @return {object} objForm объект 'form' DOM
 */
function createForm(jsonStr) {
  try {
    let jsonDoc = JSON.parse(jsonStr);

    if (jsonDoc?.form == undefined) {
      console.log("This is not a form!");
      return;
    }

    let objForm = document.createElement("form");
    objForm.setAttribute("title", jsonDoc.form.name);

    // Elements
    jsonDoc.form.items.forEach((item) => {
      switch (item.type) {
        case "filler": {
          objForm.appendChild(document.createTextNode(item.attributes.message));
          break;
        }
        case "text": {
          let input = document.createElement("input");
          setAttributes(input, item);
          objForm.appendChild(input);
          break;
        }
        case "textarea": {
          let input = document.createElement("textarea");
          setAttributes(input, item);
          objForm.appendChild(input);
          break;
        }
        case "checkbox": {
          let input = document.createElement("input");
          setAttributes(input, item);
          objForm.appendChild(input);
          break;
        }
        case "button": {
          let input = document.createElement("input");
          input.setAttribute("type", item.type);
          input.setAttribute("class", item.attributes.class);
          input.setAttribute("value", item.attributes.text);
          objForm.appendChild(input);
          break;
        }
        case "select": {
          let select = document.createElement("select");
          setAttributes(select, item);
          objForm.appendChild(select);
          break;
        }
        case "radio": {
          let input = document.createElement("input");
          setAttributes(input, item);
          objForm.appendChild(input);
          break;
        }
      }
    });
    return objForm;
  } catch (error) {
    console.log("Something went wrong...");
  }
}

/**
 * Устанавливает атрибуты элементам формы
 *
 * @param {object} объект формы
 * @param {object} объект-источник атрибутов
 */
function setAttributes(element, item) {
  element.setAttribute("name", item.attributes.name);
  element.setAttribute("title", item.attributes.label);
  element.setAttribute("class", item.attributes.class);

  if (item.type == "text") {
    element.setAttribute("type", item.attributes.validationRules[0].type);
  } else {
    element.setAttribute("type", item.type);
  }

  if (item.attributes.disabled) {
    element.setAttribute("disabled", true);
  }

  if (item.attributes.placeholder != "") {
    element.setAttribute("placeholder", item.attributes.placeholder);
  }
  if (item.type == "radio") {
    element.setAttribute("required", item.attributes.required);
  } else {
    element.setAttribute("required", item.attributes.required);
  }

  if (item.type != "checkbox") {
    if (item.type == "radio") {
      element.setAttribute("value", item.attributes.items[0].value);
      if (item.attributes.items[0].checked) {
        element.setAttribute("checked", true);
      }
    } else {
      element.setAttribute("value", item.attributes.value);
    }
  } else {
    if (item.attributes.checked) {
      element.setAttribute("checked", true);
    }
  }
  if (item.type == "select") {
    item.attributes.options.forEach((option) => {
      let appendedOption = document.createElement("option");
      appendedOption.setAttribute("value", option.attributes.value);
      if (option.selected) {
        appendedOption.setAttribute("selected", true);
      }
      appendedOption.appendChild(
        document.createTextNode(option.attributes.text)
      );
      element.appendChild(appendedOption);
    });
  }
}
