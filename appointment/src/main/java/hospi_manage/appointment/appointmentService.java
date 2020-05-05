package hospi_manage.appointment;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;

import database.DataBase;

public class appointmentService {
	Connection con = DataBase.connector();
	


	//execute the select all query 
	public List<appointment> getAllappointment(){
		 List<appointment> appointment = new ArrayList<>();
	   	 String sql = "select * from appointments";
	   	 try 
	   	   {
				  Statement st = con.createStatement();
				  ResultSet rs = st.executeQuery(sql);
				  while(rs.next())
				  {
					  appointment a = new appointment();
					  a.setId(rs.getInt(1));
					  a.setName(rs.getString(2));
					  a.setDocId(rs.getInt(3));
					  a.setTime(rs.getString(4));
					  a.setDate(rs.getString(5));
					  
					   
					  
					  appointment.add(a);
				  }
				   
			    } 
	   	 catch (Exception e) 
	   	  {
				
			   System.out.println(e);
			  }
	   	  
	   	 return appointment;
	    }
	
	
	//execute the select all in specific id
	public  appointment getappointment(long id) {
		 
		   	 String sql = "select * from appointments where id="+id;
		   	appointment a = new appointment();
		   	 try 
		   	   {
					  Statement st = con.createStatement();
					  ResultSet rs = st.executeQuery(sql);
					  if(rs.next())
					  {
						 
						  a.setId(rs.getInt(1));
						  a.setName(rs.getString(2));
						  a.setDocId(rs.getInt(3));
						  a.setTime(rs.getString(4));
						  a.setDate(rs.getString(5));
						  
						     
					  }
	}
		   	 catch (Exception e) 
		   	  {
					
				   System.out.println(e);
		   	  }
		   	 return a;
		    }
	
	
	//execute the insert query

	public void create(appointment a1) 
	{
		String sql = "insert into appointments values(?,?,?,?,?)";
  	 try 
	   {
		  PreparedStatement st = con.prepareStatement(sql);
		  st.setInt(1, a1.getId());
		  st.setString(2, a1.getName());
		  st.setInt(3, a1.getDocId());
		  st.setString(4, a1.getTime());
		  st.setString(5, a1.getDate());
         st.executeUpdate();
	
		
	    } 
	 catch (Exception e) 
	  {
		
	   System.out.println(e);
	  } 
		
	}
	
	
	//execute the update query
	public void update(appointment a1) 
	{
		String sql = "update appointments set name=?,docid=?,time=?,date=? where id=?";
  	 try 
	   {
		  PreparedStatement st = con.prepareStatement(sql);

		  st.setString(1, a1.getName());
		  st.setInt(2, a1.getDocId());
		  st.setString(3, a1.getTime());
		  st.setString(4, a1.getDate());
		  st.setInt(5, a1.getId());
		  
          st.executeUpdate();
	
		
	    } 
	 catch (Exception e) 
	  {
		
	   System.out.println(e);
	  } 
		
	}
	
	//execute the delete query

	public void delete(int id) {

		String sql = "delete from appointments where id=?";
  	 try 
	   {
		  PreparedStatement st = con.prepareStatement(sql);
		  st.setInt(1, id);
         st.executeUpdate();
	
		
	    } 
	 catch (Exception e) 
	  {
		
	   System.out.println(e);
	  } 

	}
   	 
		   	 
		   	 
		   	 
	
	

}
