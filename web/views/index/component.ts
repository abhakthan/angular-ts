/**
 * Created by abhakthan on 7/17/16.
 */

export namespace components {

  export var indexComponent:ng.IComponentOptions = {
    templateUrl: './views/index/index.t.html',
    controller: IndexController
  };

  class IndexController {
    constructor() {
      console.log('Testing');
    }
  }
}



