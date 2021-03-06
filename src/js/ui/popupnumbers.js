//处理弹出的操作面板

module.exports = class PopupNumbers{
    constructor($panel){
        this._$panel = $panel.hide().removeClass("hidden");

        this._$panel.on("click","span",e => {
            const $cell = this._$targetCell;

            const $span = $(e.target);
            //mark1,mark2,回填样式
            if($span.hasClass("mark1")){
                if($cell.hasClass("mark1")){
                    $cell.removeClass("mark1");
                }else{
                    $cell.removeClass("mark2")
                        .addClass("mark1");
                }
            }else if($span.hasClass("mark2")){
                if($cell.hasClass("mark2")){
                    $cell.removeClass("mark2");
                }else{
                    $cell.removeClass("mark1")
                        .addClass("mark2");
                }
            }else if($span.hasClass("empty")){
                $cell.text(0)
                    .addClass("empty");
            }else{
                $cell.removeClass("empty").text($span.text())
            }

            this.hide();
        });
    }

    popup($cell){
        this._$targetCell = $cell;
        const{left,top} = $cell.position();
        if(left  > 7 * ($cell.width()+1)){
            if(left  > 8*($cell.width()+1)){
                this._$panel.css({
                    left: `${left - ($cell.width() + 1) * 2 }px`,
                    top: `${top}px`
                }).show();
            }else{
                this._$panel.css({
                    left: `${left - $cell.width() - 1}px`,
                    top: `${top}px`
                }).show();
            }
        }else{
            this._$panel.css({
                left: `${left}px`,
                top: `${top}px`
            }).show();
        }
    }

    hide(){
        this._$panel.hide();
    }
}