from database import qualified_leads_collection


def get_followup_leads():

    leads = qualified_leads_collection.find({
        "follow_up_needed": True
    })

    return list(leads)