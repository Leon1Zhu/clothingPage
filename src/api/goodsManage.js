/**
 * Created by zhuliang on 2018/3/1.
 */
import api from './index'

//获取账户下所有商品
let getAllProductionApi ='/api/17wa-product/{account}/all';

//获取商品详细信息，包含sku数组
let getProductionDetailInfoApi = '/api/17wa-product/{account}/product/{productid}';

//修改单品sku状态
let changeSkuStatusApi =  '/api/17wa-sku/status/{account}/{skuid}';

//批量设置商品状态
let batchChangeProductStatusApi = '/api/17wa-sku/status/all/{account}/{productId}';

//删除产品
let deleteProductApi = '/api/17wa-product';

///获取产品分类
let getProductsTypesApi = '/api/17wa-produt/types';

//图片上传接口
let picUplaodApi = '/api/17wa-image/upload';

//图片尺码标签
let getSizeIncludesAPI = '/api/17wa-include';

//获取尺码标签组
let getProductIncludeSizeApi = '/api/17wa-include/product/{account}/{productId}';
export default{
    getAllProduction(account,index,size){
      let params = {
          index:index,
          size:size
      }
      return api.get(getAllProductionApi.replace('{account}',account),params);
    },
    getProductionDetailInfo(account,productId){
        return api.get(getProductionDetailInfoApi.replace('{account}',account).replace('{productid}',productId));
    },
    changeSkuStatus(account,skuid,status){
        let params = {
          status : status
        }
        return api.put(changeSkuStatusApi.replace('{account}',account).replace('{skuid}',skuid),null,params);
    },
    batchChangeProductStatus(account,productId,status){
        let params = {
          status:status
        }
        return api.post(batchChangeProductStatusApi.replace('{account}',account).replace('{productId}',productId),null,params);
    },
    deleteProduct(account,productId){
        let params = {
          account: account,
          productId:productId
        }
        return api.delete(deleteProductApi,params);
    },
    getProductsTypes(){
      return api.get(getProductsTypesApi,null);
    },
    picUplaod(file){
      let formdata = new FormData();
      formdata.append('file',file.file)
      return api.post(picUplaodApi,formdata,null);
    },
    getSizeIncludes(){
      return api.get(getSizeIncludesAPI,null);
    },
    getProductIncludeSize(accountId,productId){

    }
}
