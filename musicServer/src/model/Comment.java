package model;

public class Comment {
    public int id;
    public int songid;
    public int userid;
    public String content;
    public String date;
    public int thumbUp;
    public int thumbDown;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", songid=" + songid +
                ", userid=" + userid +
                ", content='" + content + '\'' +
                ", date='" + date + '\'' +
                ", thumbUp=" + thumbUp +
                ", thumbDown=" + thumbDown +
                '}';
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }

    public int getSongid() {
        return songid;
    }

    public void setSongid(int songid) {
        this.songid = songid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getThumbUp() {
        return thumbUp;
    }

    public void setThumbUp(int thumbUp) {
        this.thumbUp = thumbUp;
    }

    public int getThumbDown() {
        return thumbDown;
    }

    public void setThumbDown(int thumbDown) {
        this.thumbDown = thumbDown;
    }
}

