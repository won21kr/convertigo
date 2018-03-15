    /**
     * Function AlertAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    AlertAction(page: C8oPage, props, vars) : Promise<any> {
        return new Promise((resolve, reject)=> {
            let alertCtrl = page.getInstance(AlertController);
            let objAlert = {buttons:[]};
            if(props.title != null){
                objAlert['title'] = props.title;
            }
            if(props.subTitle != null){
                objAlert['subTitle'] = props.subTitle;
            }
            if(props.cssClass != null){
                objAlert['cssClass'] = props.cssClass;
            }
            if(props.message != null){
                objAlert['message'] = props.message;
            }
            if(props.enableBackdropDismiss != null){
                objAlert['enableBackdropDismiss'] = props.enableBackdropDismiss;
            }
            if(props.button1 != null){
                objAlert['buttons'][0] = {};
                objAlert['buttons'][0]['text'] = props.button1;
                if(props.value1 != null){
                    objAlert['buttons'][0]['handler'] = ()=>{resolve(props.value1)};
                }
                if(props.cancel1 != null){
                    objAlert['buttons'][0]['role'] = props.cancel1;
                }
                if(props.css1 != null){
                    objAlert['buttons'][0]['cssClass'] = props.css1;
                }
            }
            if(props.button2 != null){
                objAlert['buttons'][1] = {};
                objAlert['buttons'][1]['text'] = props.button2;
                if(props.value2 != null){
                    objAlert['buttons'][1]['handler'] = ()=>{resolve(props.value2)};
                }
                if(props.cancel2 != null){
                    objAlert['buttons'][1]['role'] = props.cancel2;
                }
                if(props.css2 != null){
                    objAlert['buttons'][1]['cssClass'] = props.css2;
                }
            }
            if(props.button3 != null){
                objAlert['buttons'][2] = {};
                objAlert['buttons'][2]['text'] = props.button3;
                if(props.value3 != null){
                    objAlert['buttons'][2]['handler'] = ()=>{resolve(props.value3)};
                }
                if(props.cancel3 != null){
                    objAlert['buttons'][2]['role'] = props.cancel3;
                }
                if(props.css3 != null){
                    objAlert['buttons'][2]['cssClass'] = props.css3;
                }
            }
 
            let alert = alertCtrl.create(objAlert);
            alert.present();
        });
    }