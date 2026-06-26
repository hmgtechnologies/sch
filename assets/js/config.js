// ====================================================================
// School Connect — Site Config (auto-generated)
// Replace the URL and anon key below with your Supabase project values.
// ====================================================================
window.SUPABASE_URL = 'https://dgarrlzbmscpgtefdupm.supabase.co';
window.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYXJybHpibXNjcGd0ZWZkdXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzc0MTYsImV4cCI6MjA5NzkxMzQxNn0.7CNB3KcQD3NHr6ENDGb7gRX_ld_xjgpQeL_YVuLRW_A';
window.SCHOOL = {
  name:    'HMG ACADEMY ',
  short:   'HMG',
  motto:   'Bridging Digital Divide',
  currency:'₦',
  phone:   '+2348100866322',
  email:   'adeagboadewalesamson@gmail.com',
  address: '1, Tola samuel close, off Ope ilu Road Agbado Ogun State',
  campuses:["Main Campus"],
  theme:   'theme32',
  font:    'oswald',
  layout:  'layout0',
  modules: ["students","staff","classes","attendance","results","timetable","sow","cbt","report-cards","timetable-generator","checkin","assignments","library","conduct","health","promotion","lms","gamification","career_counseling","lesson_plans","behaviour","support_plans","substitutions","analytics","approvals","admin-data","settings","admissions","hr","hostel","alumni","inventory","certificates","document_builder","fleet_tracking","facility_booking","compliance","activity_log","diary","surveys","announcements","events","messages","inbox","complaints","broadcast","voting","parent_meeting","front_desk","helpdesk","menu","gallery","eresources","birthdays","idcards","flyer","reports","directory","departments","parents","school_calendar","lost_found","book_request","fees","finance","leave","visitors","transport","cafeteria","financial_aid","donations","payments_online"],
  levels:  ["JSS 1","JSS 2","JSS 3","SSS 1","SSS 2","SSS 3"],
  hmgLink: 'https://hmgconcepts.pages.dev/',
  logoExt: 'svg'
};

// Build the supabase client
const sb = (window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL')
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

console.log('%c[HMG ACADEMY ] School Connect ready.', 'color:#5207d4;font-weight:bold;font-size:13px');
