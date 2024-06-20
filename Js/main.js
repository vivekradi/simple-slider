let mainImage = document.querySelector('#main-image');
let imageItems = document.querySelectorAll('.image-item');

for(let i = 0; i < imageItems.length; i++)
    {
        imageItems[i].addEventListener('click',function(ef){
            let ReadySrc = ef.target.getAttribute('src');

            mainImage.setAttribute('src',ReadySrc);

        })
    }