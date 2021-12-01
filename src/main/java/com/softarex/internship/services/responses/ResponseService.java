package com.softarex.internship.services.responses;

import com.softarex.internship.model.Response;

import java.util.List;

public interface ResponseService {
    List<Response> getAll();
    Response add(Response response);
}
