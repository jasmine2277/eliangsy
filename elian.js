$(document).ready(function (){
    doHeaderChange();
});
function doHeaderChange() {
    var i,r;
    i = $("#headerNav");
    r = 80;
    window.addEventListener("scroll", function () {
            var t;
        if (t = window.pageYOffset || document.documentElement.scrollTop, t > r) {
            if (i.hasClass("sticked")) return;
            return i.addClass("sticked");
        }
        return i.hasClass("sticked") ? i.removeClass("sticked") : null;
    });
}
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}