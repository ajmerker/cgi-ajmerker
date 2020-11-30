using System.Data.SQLite; 
using Api.Models.Interfaces; 
using System; 
namespace Api.Models
{
    public class SaveSession : IInsertSession
    {
        public void InsertSession(Session value)
        {
            string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs);
            con.Open();

            using var cmd = new SQLiteCommand(con);

            cmd.CommandText = @"INSERT INTO sessions(Name, Category, StartTime, StopTime, TotalTime) 
            VALUES (@Name, @Category, @StartTime, @StopTime, @TotalTime)";
             
            //cmd.Parameters.AddWithValue("@Id", value.Id);
            cmd.Parameters.AddWithValue("@Name", value.Name); 
            cmd.Parameters.AddWithValue("@Category", value.Category);
            cmd.Parameters.AddWithValue("@StartTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@StopTime", value.StopTime); 
            cmd.Parameters.AddWithValue("@TotalTime", value.TotalTime);
            
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}