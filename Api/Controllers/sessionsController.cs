using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Api.Models; 
using Api.Models.Interfaces; 
using Api.Database; 
using Microsoft.AspNetCore.Cors; 

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class sessionsController : ControllerBase
    {
        // GET: api/sessions

        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Session> Get()
        {
            //ISeedData saveObj = new SaveData();
            //saveObj.SeedData();
            IGetAllSessions readObj = new ReadSessionData(); 
            return readObj.GetAllSessions(); 
        }

        // GET: api/sessions/5
        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public Session Get(int id)
        {
            IGetSession readObj = new ReadSessionData();
            return readObj.GetSession(id); 
        }

        // POST: api/sessions
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Session value)
        {
            IInsertSession saveObj = new SaveSession();
            saveObj.InsertSession(value); 
        }

        // PUT: api/sessions/5
        [EnableCors("AnotherPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Session value)
        {
            IUpdateSession updateObj = new UpdateSession(); 
            updateObj.UpdSession(id, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
