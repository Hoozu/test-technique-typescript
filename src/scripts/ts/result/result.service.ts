import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {

  list: Array<ResultModel>;

  constructor() {
    this.list = [];
  }

  public addResult(newResult:ResultModel) {
		if(!this.resultAlreadyExist(newResult.id)) {
      const event: ResultEventModel = {id: "created", idOwner: newResult.idOwner, createdAt: new Date()}
      newResult.eventResults.push(event)
      this.list.push(newResult)
    }
  }

  public seenResult(idResult:number) {
		const resultIndex = this.list.findIndex(elem => elem.id === idResult);
    if (resultIndex !== -1){
      const result =  this.list[resultIndex];
      const event: ResultEventModel = {id: "seen", idOwner: result.idOwner, createdAt: new Date()}

      result.isSeen = true;
      result.eventResults.push(event)
		}
  }

  public unseenResult(idResult:number) {
		return [];
    
  }

	private resultAlreadyExist(idResult:number): boolean {
    return this.list.findIndex(elem => elem.id === idResult) !== -1;
  }

  public getAllResult() : Array<ResultModel> {
    return this.list;
  }

  public getAllSortedResult() : Array<ResultModel> {
		return [];
  
  }

  public getAllResultSeen() : Array<ResultModel> {
		return this.list.filter(elem => elem.isSeen === true);

  }

  public getAllResultUnSeen() : Array<ResultModel> {

		return this.list.filter(elem => elem.isSeen === false);
  }
}


