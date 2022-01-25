// adds sliding underline HTML
jQuery('#menu').append('<li class="slide-line"></li>');

// set initial position of slide line
TweenMax.set('#menu .slide-line', {
  css:{width: 43, x: 20, y: 30}
});
var $this = jQuery('.active'),
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('#box').offset();

        // GSAP animate to clicked menu item
        TweenMax.to('#menu .slide-line', 1.7, {
          css:{
            width: $this.outerWidth()+'px',
            x: (offset.left-offsetBody.left)+'px',
            y: (offset.top-offsetBody.top+$this.height())+'px',
            rotation: 0.01
          },
          ease: Elastic.easeOut.config(1,0.5)
        });

// animate slide-line on click
jQuery(document).on('click', '#menu li a', function () {
        
        var $this = jQuery(this),
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('#box').offset();

        jQuery('.active').removeClass('active')
        $this.addClass('active')
        // GSAP animate to clicked menu item
        TweenMax.to('#menu .slide-line', 1.7, {
          css:{
            width: $this.outerWidth()+'px',
            x: (offset.left-offsetBody.left)+'px',
            y: (offset.top-offsetBody.top+$this.height())+'px',
            rotation: 0.01
          },
          ease: Elastic.easeOut.config(1,0.5)
        });

        return false;
});
jQuery(document).on('mouseover', '#menu li a', function () {
  
        var $this = jQuery(this),
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('#box').offset();

        // GSAP animate to clicked menu item
        TweenMax.to('#menu .slide-line', 1.7, {
          css:{
            width: $this.outerWidth()+'px',
            x: (offset.left-offsetBody.left)+'px',
            y: (offset.top-offsetBody.top+$this.height())+'px',
            rotation: 0.01
          },
          ease: Elastic.easeOut.config(1,0.5)
        });

        return false;
});
jQuery(document).on('mouseout', '#menu li a', function () {
  
        var $this = jQuery('.active'),
            offset = $this.offset(),
            //find the offset of the wrapping div  
            offsetBody = jQuery('#box').offset();

        // GSAP animate to clicked menu item
        TweenMax.to('#menu .slide-line', 1.7, {
          css:{
            width: $this.outerWidth()+'px',
            x: (offset.left-offsetBody.left)+'px',
            y: (offset.top-offsetBody.top+$this.height())+'px',
            rotation: 0.01
          },
          ease: Elastic.easeOut.config(1,0.5)
        });

        return false;
});
jQuery('#menu > li a').first().trigger("click");