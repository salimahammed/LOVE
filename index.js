
<script>
  let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
  ];

  let i = 0;

  setInterval(() => {
    i++;
    if (i >= images.length) {
      i = 0;
    }
    document.getElementById("slider").src = images[i];
  }, 2000); // 2 second por change hobe
</script>