<template>
    <div class="footer">
        <div id="company-info">
            <p>Org nr: 133 7133 7133</p>
            <p>Adresse: Anonsgate 25c, 0101, Oslo</p>
        </div>
        <div id="contact">
            <a id="mail" href="mailto:sandramoen01@gmail.com" target="_top">Send e-post</a>
            <p>Telefon +47 47053281</p>
        </div>
        <div id="social-media">
            <a href="" style="color:white"><i class="fa fa-facebook-square"></i></a>
            <a href="" style="color:white"><i class="fa fa-youtube-square"></i></a>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style scoped>
.footer {
    background-color: #c2c505;
    position: fixed;
    left: 0rem;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-around;
    height:5rem;
}

#mail {
    color:white;
}

#company-info {
    flex-direction: row;
    margin-left:2rem;
    padding:0rem;
    text-align: left;
}

#social-media {
    flex-direction: row;
    margin-right:2rem;
}

#contact {
    flex-direction: row;
}

.fa {
  padding: 1rem;
  font-size: 2rem;
  width: 3rem;
  text-align: center;
  text-decoration: none;
  margin: 0rem .25rem;
  position: relative;
  top: .5rem;
}

</style>
