import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {

  list: Array<ResultModel>;

  constructor() {
    this.list = [];
  }

  public addResult(newResult:Re	sultModel) {
    if(!this.resultAlreadyExist(newResult.id)) {
      const event: ResultEventModel = {id: "created", idOwner: newResult.idOwner, createdAt: new Date()}
      newResult.eventResults.push(event)
      this.list.push(newResult)
    }
  }

  public seenResult(idResult:number) {
		return [];

  }

  public unseenResult(idResult:number) {
		return [];
    
  }

  public getAllResult() : Array<ResultModel> {
    return this.list;
  }

  public getAllSortedResult() : Array<ResultModel> {
		return [];
  
  }

  public getAllResultSeen() : Array<ResultModel> {
		return [];
  
  }

  public getAllResultUnSeen() : Array<ResultModel> {
		return [];
   
  }


