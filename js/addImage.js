var inputImage = document.getElementById(`image`);
var readerResult;


inputImage.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    readerResult = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});


