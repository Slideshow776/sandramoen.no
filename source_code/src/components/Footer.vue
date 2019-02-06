<template>
    <div class="footer">
        <div id="contact">
            <ul>
                <li><a id="contact" href="mailto:sandramoen01@gmail.com" target="_top">Send en e-post</a></li>
                <li><a id="contact" href="tel:47053281">tlf: +47 47053281</a></li>
            </ul>
        </div>
        <div id="social-media">
            <a href="https://www.facebook.com/sandra.doe.543" style="color:white"><i class="fa fa-facebook-square"></i></a>
            <a href="https://www.youtube.com/channel/UCiWvUG5AeJ1lAkvlq0V-2cg?view_as=subscriber" style="color:white"><i class="fa fa-youtube-square"></i></a>
            <a href="https://github.com/Slideshow776" style="color:white"><i class="fa fa-github"></i></a>
        </div>
    </div>
</template>

<script>
export default { name: 'Footer' }
</script>

<style scoped>
.footer {
    background-color: #aebd38;
    position: fixed;
    left: 0rem;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height:3rem;
}

li {
  list-style-type:none;
}

#contact {
    position:relative;
    top:-.3rem;
    color:rgb(0, 0, 0);
    font-weight: 600;
}

#contact:hover {
    color:#68829e;
}

#social-media {
    position:relative;
    top:-.9rem;
    margin-right:2rem;
}

.fa {
  padding: 1rem;
  font-size: 2rem;
  width: 3rem;
  text-align: center;
  text-decoration: none;
  position: relative;
  top: .5rem;
  color:#000000;
}

.fa:hover {
    color:#68829e;
}
</style>
