import m from "mithril";

m.render(document.body, [
  m("h1", "Please select an image to be decomposed:"),
  m("input[type=file]", { onchange: upload }),
]);

function upload(e) {
  var file = e.target.files[0];

  var body = new FormData();
  body.append("myfile", file);

  m.request({
    method: "POST",
    url: "../back-end/svdCalculator",
    body: body,
  });
}
