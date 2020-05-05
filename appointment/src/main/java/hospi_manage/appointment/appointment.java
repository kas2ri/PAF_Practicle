package hospi_manage.appointment;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class appointment {
	
	
	private int id;
	private String name;
	private int docid;
	private String time;   
	private String date;
	//default constructor
	public appointment() {
		   
	}
	//constructor with parameters
	public appointment(int id, String name,int docid,String time,String date) {
		this.id = id;
		this.name = name;
		this.docid = docid;
		this.time = time;
		this.date = date;
	}
//getters and setters to fetching data


	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getDocId() {
		return docid;
	}



	public void setDocId(int docid) {
		this.docid = docid;
	}



	public String getTime() {
		return time;
	}



	public void setTime(String time) {
		this.time = time;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}
	
		

}
