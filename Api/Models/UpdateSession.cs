using System.Data.SQLite; 
using Api.Models.Interfaces;
using System; 
namespace Api.Models
{
    public class UpdateSession : IUpdateSession
    {
        public void UpdSession(int id, Session value)
        {
            if (value.TotalTime == 0){
                string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs); 
            con.Open(); 
            //var updatedTotalTime = int.Parse(value.TotalTime); 
            using var cmd = new SQLiteCommand(con); 

            cmd.CommandText = @"UPDATE sessions SET StopTime = @StopTime WHERE id = @Id"; 
            //cmd.CommandText = @"UPDATE sessions SET TotalTime = @TotalTime WHERE id = @Id"; 
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.Parameters.AddWithValue("@Name", value.Name);
            cmd.Parameters.AddWithValue("@Category", value.Category); 
            cmd.Parameters.AddWithValue("@StartTime", value.StartTime);
            cmd.Parameters.AddWithValue("@StopTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@TotalTime", value.TotalTime);

            Console.WriteLine(" total time = " + value.TotalTime);
            Console.WriteLine(" id = " + id); 

            cmd.Prepare(); 
            cmd.ExecuteNonQuery(); 

            Console.WriteLine("Sucsessfully Updated Session!"); 
            Console.WriteLine(" total time = " + value.TotalTime);
            Console.WriteLine(" id = " + id); 

            }
            else{
                string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs); 
            con.Open(); 
            //var updatedTotalTime = int.Parse(value.TotalTime); 
            using var cmd = new SQLiteCommand(con); 

            cmd.CommandText = @"UPDATE sessions SET TotalTime = @TotalTime WHERE id = @Id"; 
            //cmd.CommandText = @"UPDATE sessions SET TotalTime = @TotalTime WHERE id = @Id"; 
            cmd.Parameters.AddWithValue("@Id", id);
            cmd.Parameters.AddWithValue("@Name", value.Name);
            cmd.Parameters.AddWithValue("@Category", value.Category); 
            cmd.Parameters.AddWithValue("@StartTime", value.StartTime);
            cmd.Parameters.AddWithValue("@StopTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@TotalTime", value.TotalTime);

            Console.WriteLine(" total time = " + value.TotalTime);
            Console.WriteLine(" id = " + id); 

            cmd.Prepare(); 
            cmd.ExecuteNonQuery(); 

            Console.WriteLine("Sucsessfully Updated Session!"); 
            Console.WriteLine(" total time = " + value.TotalTime);
            Console.WriteLine(" id = " + id); 
            }
        }
    }
}