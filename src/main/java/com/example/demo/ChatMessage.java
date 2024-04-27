package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // 主键

    private Integer message; // 消息内容

    // 空构造函数

    // 构造函数
    public ChatMessage(Integer id, Integer message) {
        this.id = id;
        this.message = message;
    }

    public ChatMessage() {

    }

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMessage() {
        return message;
    }

    public void setMessage(Integer message) {
        this.message = message;
    }

    // toString方法，用于打印对象内容
    @Override
    public String toString() {
        return "ChatMessage{" +
                "id=" + id +
                ", message=" + message +
                '}';
    }


}
