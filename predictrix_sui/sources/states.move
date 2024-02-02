module predictrix_sui::states {

    use sui::object::{Self, UID}


    struct Maine has store, key {
        id: UID, 
        electoral_votes: u8,
        votes_cast: bool,
        rep_votes: u8,
        dem_votes: u8,

    }


      struct Ohio has store, key {
        id: UID, 
        electoral_votes: u8,
        votes_cast: bool,
        rep_votes: u8,
        dem_votes: u8,

    }


      struct Pennsylvania has store, key {
        id: UID, 
        electoral_votes: u8,
        votes_cast: bool,
        rep_votes: u8,
        dem_votes: u8,

    }


      struct Texas has store, key {
        id: UID, 
        electoral_votes: u8,
        votes_cast: bool,
        rep_votes: u8,
        dem_votes: u8,

    }


      struct Vermont has store, key {
        id: UID, 
        electoral_votes: u8,
        votes_cast: bool,
        rep_votes: u8,
        dem_votes: u8,

    }



}