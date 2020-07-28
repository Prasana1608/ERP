//Profile Dropdowm
jQuery(document).ready(function (e) {

    
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
    
});


jQuery(document).ready(function ($) {

    //collapse Menu
    const body = document.body;
    const collapseBtn = document.querySelector(".collapse-btn");
    const collapsedClass = "collapsed";

    collapseBtn.addEventListener("click", function () {
        this.getAttribute("aria-expanded") == "true" ?
            this.setAttribute("aria-expanded", "false") :
            this.setAttribute("aria-expanded", "true");
        this.getAttribute("aria-label") == "collapse menu" ?
            this.setAttribute("aria-label", "expand menu") :
            this.setAttribute("aria-label", "collapse menu");
        body.classList.toggle(collapsedClass);
    });



    jQuery("#assets").hover(
        function () {
            jQuery(".hover-div").addClass("hover-div-open");
        },
        function () {
            jQuery(".hover-div").removeClass("hover-div-open");
        }
    );
    jQuery(".hover-div").hover(
        function () {
            jQuery(".hover-div").addClass("hover-div-open");
        },
        function () {
            jQuery(".hover-div").removeClass("hover-div-open");
        }
    );


   //DropDown
    (function ($) {
        var CheckboxDropdown = function (el) {
            var _this = this;
            this.isOpen = false;
            this.areAllChecked = false;
            this.$el = $(el);
            this.$label = this.$el.find(".dropdown-label");
            this.$selected_text = this.$el.find(".selecttext");
            
            this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
            this.$inputs = this.$el.find('[type="checkbox"]');

            this.onCheckBox();

            this.$label.on("click", function (e) {
                e.preventDefault();
                _this.toggleOpen();
            });

            this.$checkAll.on("click", function (e) {
                e.preventDefault();
                _this.onCheckAll();
            });

            this.$inputs.on("change", function (e) {
                _this.onCheckBox();
            });
        };

        CheckboxDropdown.prototype.onCheckBox = function () {
            this.updateStatus();
        };

        CheckboxDropdown.prototype.updateStatus = function () {
            var checked = this.$el.find(":checked");

            this.areAllChecked = false;
            this.$checkAll.html("Select All");

            if (checked.length <= 0) {
                this.$selected_text.html("O items");
            } else if (checked.length === 1) {
                this.$selected_text.html(checked.parent("label").text());
            } else if (checked.length === this.$inputs.length) {
                this.$selected_text.html("Select All");
                this.areAllChecked = true;
                this.$checkAll.html("Unselect All");
            } else {
                this.$selected_text.html(checked.length + "&nbsp;Item Selected");
            }
        };

        CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
            if (!this.areAllChecked || checkAll) {
                this.areAllChecked = true;
                this.$checkAll.html("Unselect All");
                this.$inputs.prop("checked", true);
            } else {
                this.areAllChecked = false;
                this.$checkAll.html("Select All");
                this.$inputs.prop("checked", false);
            }

            this.updateStatus();
        };

        CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
            var _this = this;

            if (!this.isOpen || forceOpen) {
                this.isOpen = true;
                this.$el.toggleClass("on");
                $(document).on("click", function (e) {
                    if (!$(e.target).closest("[data-control]").length) {
                        _this.toggleOpen();
                    }
                });
            } else {
                this.isOpen = false;
                this.$el.removeClass("on");
                $(document).off("click");
            }
        };

        var checkboxesDropdowns = document.querySelectorAll(
            '[data-control="checkbox-dropdown"]'
        );
        for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
            new CheckboxDropdown(checkboxesDropdowns[i]);
        }

        $(".close-btn").click(function () {
            $(".dropdown").removeClass("on");
        });
    })(jQuery);
    

    $('.modal-toggle').on('click', function (e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
    });

    $('.sub-modal-open').on('click', function (e) {
        e.preventDefault();
        $('.sub-model-content').toggleClass('is-visible');
    });

    //Select All table
    $(function () {
        // add multiple select / deselect functionality
        $("#selectall").click(function () {
            $('.name').attr('checked', this.checked);
        });

        // if all checkbox are selected, then check the select all checkbox
        // and viceversa
        $(".name").click(function () {

            if ($(".name").length == $(".name:checked").length) {
                $("#selectall").attr("checked", "checked");
            } else {
                $("#selectall").removeAttr("checked");
            }

        });
    });

    //List Search
    $("input").on("keyup", function (ev) {
        var texto = $(this).val();
        filtro(texto);
    });

    function filtro(texto) {
        var lista = $(".search-list li").hide()
            .filter(function () {
                var item = $(this).text();
                var padrao = new RegExp(texto, "i");

                return padrao.test(item);
            }).closest("li").show();
    }


    //Tab List
    $('.previous').hide();

    $('.tabsWrapper .tabs li').click(function () {

        if ($(this).is(':last-child')) {
            $('.next').hide();
        } else {
            $('.next').show();
        }

        if ($(this).is(':first-child')) {
            $('.previous').hide();
        } else {
            $('.previous').show();
        }

        var position = $(this).position();
        var corresponding = $(this).data("id");
        scroll = $('.tabs').scrollLeft();
        $('.tabs').animate({
            'scrollLeft': scroll + position.left - 30
        }, 200);
        $('.tabContent div').hide();
        $('div.' + corresponding).toggle();
        $('div.' + corresponding).addClass("active");
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
    });

    $('div a').click(function (e) {
        e.preventDefault();
        $('li.active').next('li').trigger('click');
    });
    $('.next').click(function (e) {
        e.preventDefault();
        $('li.active').next('li').trigger('click');
    });
    $('.previous').click(function (e) {
        e.preventDefault();
        $('li.active').prev('li').trigger('click');
    });



    //TOGGLING NESTED ul
    $(".drop-down .selected .select-text").click(function () {
        $(".drop-down .options ul").toggle();
    });
    $(".drop-down .options ul li").click(function () {
        var text = $(this).html();
        $(".drop-down .selected .select-text span").html(text);
        $(".drop-down .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("drop-down"))
            $(".drop-down .options ul").hide();
    });

    //subcategory drop-down
    $(".sub-category .selected .select-text").click(function () {
        $(".sub-category .options ul").toggle();
    });
    $(".sub-category .options ul li").click(function () {
        var text = $(this).html();
        $(".sub-category .selected .select-text span").html(text);
        $(".sub-category .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("sub-category"))
            $(".sub-category .options ul").hide();
    });

     //Asset category drop-down
    $(".asset-category .selected .select-text").click(function () {
        $(".asset-category .options ul").toggle();
    });
    $(".asset-category .options ul li").click(function () {
        var text = $(this).html();
        $(".asset-category .selected .select-text span").html(text);
        $(".asset-category .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("asset-category"))
            $(".asset-category .options ul").hide();
    });
    //Asset category drop-down
    $(".parent-asset .selected .select-text").click(function () {
        $(".parent-asset .options ul").toggle();
    });
    $(".parent-asset .options ul li").click(function () {
        var text = $(this).html();
        $(".parent-asset .selected .select-text span").html(text);
        $(".parent-asset .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("parent-asset"))
            $(".parent-asset .options ul").hide();
    });
    //Asset category drop-down
    $(".department .selected .select-text").click(function () {
        $(".department .options ul").toggle();
    });
    $(".department .options ul li").click(function () {
        var text = $(this).html();
        $(".department .selected .select-text span").html(text);
        $(".department .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("department"))
            $(".department .options ul").hide();
    });
    //Asset category drop-down
    $(".asset-name .selected .select-text").click(function () {
        $(".asset-name .options ul").toggle();
    });
    $(".asset-name .options ul li").click(function () {
        var text = $(this).html();
        $(".asset-name .selected .select-text span").html(text);
        $(".asset-name .options ul").hide();
    });

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("asset-name"))
            $(".asset-name .options ul").hide();
    });
});
